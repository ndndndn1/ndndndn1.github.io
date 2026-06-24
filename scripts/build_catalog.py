#!/usr/bin/env python3
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "catalog.config.json"
OUTPUT_PATH = ROOT / "sites.json"


def github_repo(owner, repo, token):
    request = urllib.request.Request(
        f"https://api.github.com/repos/{owner}/{repo}",
        headers={
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            **({"Authorization": f"Bearer {token}"} if token else {}),
        },
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        return json.loads(response.read().decode("utf-8"))


def main():
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    owner = config["owner"]
    token = os.environ.get("CATALOG_GITHUB_TOKEN") or os.environ.get("GITHUB_TOKEN", "")
    generated_at = datetime.now(timezone.utc).isoformat(timespec="seconds")
    sites = []

    for item in config.get("sites", []):
        repo = item["repo"]
        fallback = {
            "repo": repo,
            "name": item.get("name") or repo,
            "description": item.get("description") or "",
            "tags": item.get("tags", []),
            "priority": item.get("priority", 100),
            "site_url": f"https://{owner}.github.io/{repo}/",
            "repo_url": f"https://github.com/{owner}/{repo}",
            "default_branch": "main",
            "updated_at": None,
            "status": "configured",
        }

        try:
            remote = github_repo(owner, repo, token)
            fallback.update(
                {
                    "description": item.get("description") or remote.get("description") or "",
                    "repo_url": remote.get("html_url") or fallback["repo_url"],
                    "default_branch": remote.get("default_branch") or fallback["default_branch"],
                    "updated_at": remote.get("pushed_at") or remote.get("updated_at"),
                    "status": "ready",
                }
            )
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as exc:
            print(f"catalog warning: {owner}/{repo}: {exc}", file=sys.stderr)

        sites.append(fallback)

    sites.sort(key=lambda entry: (entry.get("priority", 100), entry["name"].lower()))
    OUTPUT_PATH.write_text(
        json.dumps(
            {
                "title": config.get("title", f"{owner} Pages"),
                "owner": owner,
                "generated_at": generated_at,
                "sites": sites,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()

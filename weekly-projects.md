# 주간 모듈 프로젝트 운영

목적: AI·데이터·제조 산업공학·반도체공정 채용 변화에서 실제 제안 가치가 있는 프로젝트를 매주 하나 구현합니다.
문맥: 2026-10-09 경력 프로젝트 요청. 코드와 검증 결과는 각 private 저장소, 이곳은 프로젝트 index만 관리합니다.

## 상태와 일정
토요일 오전(한국시간): 출처·전주 결과 점검, 프로젝트 선정, 계획·프로토타입.
일요일~목요일: 개선·검증. 금요일: 제안서·재현법·한계 작성.
2시간/일은 초기 운영 가정이며 다음 선정 때 실제 사용시간으로 조정합니다.
전주 결과: process-contract-change-gate (2026-10-31~11-06)는 **prototype** — private 전달·16개 작성자 테스트·CLI/live REST/MCP smoke 완료, 그러나 10/31 이후 commit이 없어 2~7일차 독립 corpus·holdout·실측·제안서는 미완료.
이번 주 확정: manufacturing-data-release-gate (2026-11-07~11-13, 14시간), **prototype** — private 저장소·21개 테스트·CLI/live REST/MCP 검증 완료; 독립 corpus·실제 GitOps·실측은 다음 gate.

## 선정
- 목표: 연말까지 안정적 일자리 확보를 돕는 구현·검증·현장 제안 증거.
- 우선: 반도체 DX/데이터 → MES/AI/AX → 직원 200명 이상 비반도체 데이터/DX/AX. 연구·계약직 제외.
- 영어 요구 없음 또는 토익스피킹 110 이하 조건을 확인하고 미확인은 구분. KTX 대도시 선호.
- 공식 기업 JD와 산업협회·개발 커뮤니티 자료를 우선, 날짜·유효 여부·중복 공고를 점검.
- 기대 성과 × 성공가능성 × 정보가치 ÷ 시간·비용으로 비교. 수치는 판단 추정과 근거를 함께 표시.
- 1주 평가가 불가능하거나 기존 기능과 중복되는 후보는 제외. 학위·관련 경력 요건을 프로젝트로 충족한 것으로 바꾸지 않음.

## 공통 계약
project.json: 목적·문맥, 결정형/비결정형, 입력·출력/근거 schema version, CLI/REST/MCP, 데이터 구분, 기준 방식, 판정 기준, 한계.
결정형: 계산·검사·측정·재현. 비결정형: 문제 선택·가설·해석·문장; 근거 ID 연결 및 사람 검토.
코드는 신규 private repo에 관리. index에는 목적·문맥 2줄 이내와 정확한 상태를 기록.
상태: candidate → prototype → improving → validated → proposal-ready. 도구·데이터·평가 막힘은 blocked.

## 최초 후보
1. process-data-trust-gate: 단위·중복·시간 역전·lot 누수 검사.
2. wafer-holdout-evaluator: 공정 예측의 held-out 평가와 불확실성.
3. mes-event-replay-auditor: 이벤트 재생과 장애 근거.
4. fab-dispatch-replay: 생산 배차의 cycle time·throughput 비교.
5. process-evidence-assistant: 근거 기반 기술 질의와 abstention 평가.
2~5는 다음 주 재선정 대상이며 실행 확정 아님.

## 완료 판정
첫 주: 독립 failure corpus, 중요 오류 검출 100%, 정상 오탐 ≤5%, 동일 입력 CLI/REST/MCP 일치, 실제 반복 업무 중앙 소요시간 ≥30% 단축과 정확성 유지.
목표값은 향후 판정 기준이며 달성 수치가 아님. 실측·독립 검증이 없으면 합성 데모로 표시.
외부인에게 자동 메시지/제안서 전송하지 않음.

## 근거
- [제조 AI 데이터·운영 역할](https://jobs.ams-osram.com/en/job/Premstaetten-Data-Scientist-_-AI-Engineer-d_m_w/24142)
- [서울 Applied AI Engineer](https://openai.com/careers/applied-ai-engineer-seoul-south-korea/)
- [Lam Korea process role](https://opportunities.lamresearch.com/job/Yongin-Process-Engineer-3-KR-Y/1436087000/)
- [Agent engineering 조사](https://www.langchain.com/state-of-agent-engineering)
- [MCP 중립 거버넌스](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)
2026-10-09 조회. 일부 자료는 이전 변화의 baseline이며 이번 주 신규 발표로 간주하지 않음. 초기 방향성 조사이고 시장 전체 성장률 추정 아님.

## 2026-10-10 선정 기록

공정 단위·lot 분리 검사를 기존 flow 요청 계약에 연결하는 모듈을 확정했습니다.
이전 준비물의 검증 부족을 해결하는 목적이며 새 대시보드·일반 ETL·이벤트 재생 구현은 추가하지 않습니다.

- 전주 완료 프로젝트는 없음: 10/9 사전 준비의 합성 테스트 12개 통과를 재확인. 현재 22개 테스트와 개발용 합성 20사례 일치; 독립 검증·실제 업무시간은 미측정.
- 판단 추정 점수: 성과 4 × 구현 성공가능성 .85 × 정보가치 5 ÷ 14시간 = 1.21. 취업 성공확률이나 시장 통계가 아님.
- 공식 [Data Architect](https://careers.sk-materials.com/apply/jobView/381384347)는 정규직·10/18 23:59 KST 마감, 관련 경력 7년 이상 필수여서 지원 추천 제외. 영어 점수는 확인 필요.
- [MCP 2026-07-28](https://blog.modelcontextprotocol.io/posts/2026-07-28/)은 이전 조사에서 빠진 호환성 기준. 현재 프로토타입은 legacy 2025-11-25 stdio이며 최신 규격 적합성은 미구현·미검증.
- 10/9~10/10 신규 발표로 확인된 시장 변화는 없음. 이번 추가 근거는 이전 발표·공고의 신규 발견 및 기록 보정.
- 계획: 10/10 프로토타입 → 10/11 독립 라벨 → 10/12 CSV 계약 → 10/13 고정 holdout → 10/14 외부 client 연동 → 10/15 실측 → 10/16 제안서. 각 2시간.
- 저장소 생성/push 미완료: 플러그인에는 생성 도구가 없고 승인된 브라우저는 로그아웃 상태. 코드 저장소 생성 완료로 표시하지 않음.

## 2026-10-10 추가 확인

- 공식 [SK AX MES·Agent 공고 R261676](https://www.skcareers.com/Recruit/Detail/R261676)는 정규직 구축/운영/최적화 직무이나 **2026-09-14 23:59 마감 / Application closed**입니다. 검색에 노출되어도 현재 지원 후보로 집계하지 않습니다. 과거 수요 근거로만 사용합니다. 제조 분야 PM/PL/AA 경험과 해당 분야 경력 3년 이상이 필요하며 외국어는 우대, 점수 기준은 확인 필요입니다.
- 기존 flow-data-processing의 /v1/run 계약과 event-stream-reliability의 재처리·DLQ 기능을 재확인했습니다. 선정 모듈을 유지하고 일반 ETL 및 replay를 중복 구현하지 않습니다.
- 연결 계정 ndndndn1 확인, 선택 프로젝트 저장소 조회는 404 및 접근 가능한 목록에 없음. 브라우저 /new는 로그인으로 이동했습니다. 새 저장소 생성·코드 push는 미완료이며 자동 생성 도구 또는 인증된 브라우저 세션이 필요합니다. 독립 검증 준비와 주간 판단 자체는 계속 가능합니다.
- 현재 코드의 공학 테스트 22개 재실행 통과. 개발용 합성 20사례를 독립 holdout 성과로 표시하지 않습니다. 이번 확인으로 프로젝트 선정 또는 14시간 계획은 바뀌지 않습니다.

## 2026-10-11 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 비결정형 원인 가설은 별도 사람 검토 대상으로 둡니다.
상태: **blocked** — 합성 오류 24건 blind review packet과 27개 회귀 테스트는 준비됐으나, 독립 검토와 private 저장소 생성·push가 완료되지 않았습니다.

## 2026-10-12 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 승인된 실측 CSV와 private 저장소가 없어 현재 상태는 **blocked**입니다.

## 2026-10-13 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 독립 holdout과 private 저장소가 없어 상태는 **blocked**입니다.

## 2026-10-14 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 상태는 **blocked** — 독립 평가·실측 성과·private 코드 전달 미완료입니다.

## 2026-10-15 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 상태는 **blocked** — 독립 평가·실측 업무시간·private 코드 전달 미완료입니다.

## 2026-10-16 상태

목적: 공정 데이터 오류·분할 누수를 분석 전에 결정형으로 차단합니다.
문맥: 제조 데이터·AI 연동 직무용 7일 검증 프로젝트이며 상태는 **blocked** — 제안서 초안 작성, 독립 평가·실측 비교·private 코드 전달 미완료입니다.


## 2026-10-17 선정 기록

목적: 공정 예측의 시간순 분할·누수·불균형 지표 평가를 CLI·REST·MCP에서 재사용합니다.
문맥: 전주 현장 pilot은 외부 증거 부재로 보존하고, 공개 SECOM 역사 데이터로 검증 가능한 후속 모듈을 선정합니다.

- 전주 53개 회귀 테스트를 재실행해 통과했습니다. 합성 104건 일치는 10/16 기록이며, 독립 라벨·실측 0쌍 상태는 변하지 않았습니다. 전주를 완료로 변경하지 않습니다.
- 기존 flow-model-core의 실제 runtime(가중합/boolean assurance)과 MES·recipe detector·공정 index를 검토했습니다. 일반 ETL·replay·detector는 추가 구현하지 않습니다.
- 선정 판단값: 영향4 × 로컬 benchmark 완성가능성.80 × 정보가치5 ÷14h = 1.143. 전주 현장 pilot은 외부 증거 미확보로 .10을 적용해 .143입니다. 취업 확률·시장 통계가 아니며 private 전달은 별도 blocked gate입니다.
- 첫날 prototype: 결정형 시간분할/ID·group·정확 feature hash 누수 감사/이진 지표. 비결정형 대표성·인과 해석·제안 판단은 별도 사람 검토입니다.
- 공개 UCI SECOM 1,567행을 날짜 기준 820/367/380행으로 분리했습니다. 동일 날짜·정확 feature hash의 분할 교차 없음. 원본은 590 numeric columns이며 웹 설명 591과 다릅니다. lot 정보 부재로 lot 독립성은 unverified입니다.
- 20개 테스트, tied-score 100사례 sklearn 계산 oracle, 공개 1,567행 metadata에 대한 CLI·REST·legacy MCP complete-response parity 통과. 모델 학습·test 성능 계산·현장 효과 측정은 아직 없습니다. MCP 2025-11-25 minimal prototype, 최신 규격·외부 named client는 미검증입니다.
- 7일 각2h: 10/17 분할·prototype →18 train-only Dummy/LR baseline →19 leakage sentinel →20 validation 설정 freeze →21 temporal test1회 →22 client/오류복구 →23 방법 제안서. 자동 개선 예약을 재개하거나 새로 만들지는 않았습니다.
- 기준: 모든 행 보존, 분할 누수 차단, train-only preprocessing, metric oracle 오차≤1e-12, 인터페이스 일치, baseline 대비 AP/recall/FPR/분모 보고. 모델이 baseline보다 나빠도 결과를 보존하고 배포를 거절합니다. 공개 benchmark를 새 fab 검증이나 업무시간 단축으로 부르지 않습니다.
- 새 산업 근거: [SEMI 10/13 전망](https://www.semi.org/en/semi-press-release/global-300mm-fab-equipment-spending-to-reach-227-billion-in-2029-as-buildout-accelerates-semi-projects)은 2026 300mm 장비지출 $149B(+31%)를 전망하며, 채용 증가 실측은 아닙니다. [LangChain 10/15 평가 지침](https://www.langchain.com/blog/common-questions-about-agent-evals)은 code evaluator·baseline·최종 상태 평가를 구체화합니다.
- 새 채용 확인대상: [삼성SDI AX/PI 포함 공고](https://www.samsungcareers.com/hr/)가 공식 검색 결과에 10/14~10/23로 나타나나 상세 고용형태·경력·영어·마감시각은 확인 필요입니다. 정규직 추천으로 확정하지 않았습니다. SK AX R261987은 계약직이라 제외, SAP ERP R262067은 11/17 23:59 정규직이나 SAP 경력 적합성 미확인입니다. SK머티리얼즈7년 요건·마감 MES 제외 판단은 유지합니다. 영어 미기재를 요구 없음으로 처리하지 않습니다.
- 전달: 연결 계정 ndndndn1 확인. 새 저장소 생성 tool 부재와 기존 승인 거부를 stop condition으로 유지했습니다. 새 private repo 생성·code push는 하지 않았으며 기존 public projects.json 전체 교체도 재시도하지 않았습니다. 이 문서가 최신 상태이고 projects.json은 stale입니다.


## 2026-10-31 선정 기록

목적: 반도체/제조 데이터 계약의 두 버전을 비교해 파괴적 변경을 배포 전에 차단하고 영향 소비자를 특정합니다.
문맥: 전주 단일-version ontology 구조 검증과 기존 flow-lineage 영향 조회 사이의 공백을 채우며, 추출·lineage 저장·일반 drift 검출은 재구현하지 않습니다.

- 전주 결과 우선 확인: [process-ontology-quality-gate](https://github.com/ndndndn1/process-ontology-quality-gate)는 10/24 이후 추가 commit이 없고 project.json도 독립 mapping review·실제 timing 미완료를 명시합니다. 완료/validated로 승격하지 않습니다.
- 자산 점검: flow-lineage는 immutable schema reference와 impact 조회, flow-semantic은 upstream 추출, 전주 gate는 단일 graph conformance를 담당합니다. 전체 계정 code search에서 ontology diff·breaking contract 판정 구현은 발견되지 않았습니다.
- 선정 판단값(추정): 영향4 × 성공가능성.90 × 정보가치5 ÷14시간 = **1.286**. Text2SQL evaluator는 5×.55×5÷14=.982, MES incident evidence module은 4×.75×4÷14=.857입니다. 취업 확률이나 시장 통계가 아닙니다.
- 첫날 prototype: entity/field/type/requiredness/relation/cardinality/unit/version 변경, declared consumer 영향, canonical hash와 sorted issue를 결정형으로 판정합니다. 계약 scope·undeclared consumer·semantic truth·deployment approval는 비결정형 사람 판단입니다.
- 계약: CLI `process-contract-change --input FILE_OR_DASH`; REST `POST /v1/compare`, `GET /healthz`; MCP 2026-07-28 stateless stdio JSON-RPC `compare_process_contracts` 및 `server/discover`.
- 검증: 작성자 fixture 16개 unit/contract 테스트, 실제 CLI, live REST health/compare, MCP discover를 통과했습니다. 예제 파괴 변경 4건을 mes-lot-ingest 영향으로 block했습니다. 독립 정확도 또는 업무시간 개선 증거는 아닙니다.
- 7일 각2h: 10/31 prototype → 11/1 독립 30-change corpus → 11/2 alias/deprecation policy → 11/3 flow-lineage schema ref 연결·freeze → 11/4 one-time 20-case holdout → 11/5 named MCP client·오류복구 → 11/6 5쌍 시간측정·제안서.
- 승격 기준: critical breaking recall 100%, reviewed compatible false block 0, 동일 입력 hash/order 재현, CLI/REST/MCP structured parity, fail-open 0, manual 대비 중앙 검토시간 30% 이상 단축 및 정확성 유지. 실패 결과도 보존하고 release를 거절합니다.
- 채용 변화: [SK AX AI Data 엔지니어 R261937](https://www.skcareers.com/Recruit/Detail/R261937)는 정규직·11/20 23:59까지 지원 가능하며 ontology/knowledge graph/data quality 평가 기준과 직접 정렬됩니다. [제조 AI/DT R262159](https://www.skcareers.com/Recruit/Detail/R262159)는 정규직·11/24 23:59까지입니다. 두 공고 모두 외국어는 우대이지 필수가 아니나 TOEIC Speaking 점수 기준은 미기재라 **확인 필요**입니다.
- 제외/종료: 삼성SDI AX/PI는 10/23, SK AI Application R261994는 10/26 종료. 10/21 신규 AX/AI PM/PL R262275와 Application 운영 R262274, 10/20 스마트팩토리 공고는 계약직이라 제외합니다.
- 산업·커뮤니티 변화: SEMI 공식 newsroom은 10/26~28 Japan 50주년/TechLeadersARENA, Europa의 advanced packaging·fab management·AI-era 의제를 새로 게시했습니다. 이는 채용 증가 실측이 아니라 방향성 신호입니다. MCP 최신 안정판은 여전히 2026-07-28이고 이번 주 신규 규격은 없습니다.
- 전달: private [process-contract-change-gate](https://github.com/ndndndn1/process-contract-change-gate) 생성·code push·visibility 재확인 완료. 외부인에게 메시지를 보내지 않았습니다.


## 2026-11-07 선정 기록

목적: 제조 데이터 파이프라인의 artifact·contract·lineage·quality·SLO·rollback 증거를 GitOps 승격 전에 결정형으로 검증합니다.
문맥: 반도체/제조 AI-ready 데이터 플랫폼 직무를 겨냥하되 기존 ETL·관측·lineage·replay·contract 모듈은 재구현하지 않고 그 출력 증거만 조합합니다.

- 전주 검증 우선 확인: [process-contract-change-gate](https://github.com/ndndndn1/process-contract-change-gate)는 2026-10-31 KST 이후 추가 commit이 없고 project.json의 독립 corpus·named MCP client·실제 timing도 여전히 pending입니다. private 전달과 첫날 구현은 완료했지만 2~7일차와 제안서는 미완료이므로 **prototype**을 유지합니다.
- 자산 점검: flow-data-processing은 ETL/quality 실행, flow-observability는 anomaly/KPI, flow-lineage는 OpenLineage 저장·영향 그래프, event-stream-reliability는 retry/DLQ/replay, 전주 모듈은 contract compatibility를 담당합니다. 이번 모듈은 이 결과들의 release evidence만 확인해 중복 구현을 피합니다.
- 선정 점수(판단 추정): manufacturing data release gate 5×.90×5÷14h=**1.607**; AI-ready profiler 4×.85×4÷14=.971; Kubernetes capacity checker 4×.70×4÷14=.800. 취업확률이나 시장통계가 아닙니다.
- 결정형 핵심: canonical JSON/hash, embedded evidence tamper, immutable image/SBOM, contract allow, connected lineage, quality count/status, freshness/error-rate, tested rollback, stable finding order, fail-closed allow/block.
- 비결정형 판단: threshold owner, 증거가 실제 production을 대표하는지, risk exception, 배포 승인, 제안서 문맥. 기술적 `allow`는 배포 승인이 아닙니다.
- 계약: CLI `manufacturing-release-gate --input FILE_OR_DASH`; REST `POST /v1/evaluate`, `GET /healthz`; MCP 2026-07-28 stateless stdio JSON-RPC `evaluate_manufacturing_data_release`. 세 인터페이스는 동일 decision/hash/finding envelope를 반환합니다.
- 첫날 검증: 작성자 fixture 21개 unit/contract 테스트, 실제 CLI, live REST health/evaluate, MCP discovery·structured parity를 통과했습니다. 정상 fixture는 `allow`, 증거 6개, findings 0으로 일치했습니다. 독립 정확도·registry/cluster/CI truth·현장 효과 증거는 아닙니다.
- 7일 각2h: 11/07 schema/core/interfaces → 11/08 구현 결과를 보기 전 독립 30 bundle 명세 → 11/09 file/OCI resolver·tamper corpus → 11/10 contract/OpenLineage/quality/SLO 연결·policy freeze → 11/11 20-case holdout 1회 → 11/12 GitOps dry-run·named MCP client·오류복구 → 11/13 5쌍 manual 대비·제안서.
- 승격 기준: seeded critical recall 100%, reviewed compliant false block 0, byte mutation hash 변화 100%, producer/schema 누락·timeout·interface mismatch fail-open 0, CLI/REST/MCP parity, manual 대비 중앙 검토시간 30% 이상 단축과 정확성 유지. 실패 결과도 보존합니다.
- 신규 최우선 채용: [SK AX R262415](https://www.skcareers.com/Recruit/Detail/R262415)은 11/4 게시·12/25 23:59 마감인 정규직 Manufacturing AI/Data Engineer·DevOps(k8s)입니다. 제조 대용량 pipeline, AI-ready platform, GitOps, governance/metadata/data quality와 직접 정렬되며 관련 경력 3년 이상입니다. 외국어는 우대이고 TOEIC Speaking 점수는 미기재라 **확인 필요**입니다.
- 추가 유효 채용: [SK AX R262266](https://www.skcareers.com/Recruit/Detail/R262266)은 정규직 반도체 Cloud/AI Platform 개발·운영, 11/30 23:59 마감, 관련 경력 4년 이상입니다. 외국어는 우대이고 점수 기준은 **확인 필요**입니다. 삼성물산 건설 AI 서비스 개발/Data Engineer는 11/4~16 신규 노출됐으나 목록만으로 고용형태·영어요건을 확인하지 못해 상위 추천으로 확정하지 않았습니다.
- 산업·커뮤니티 변화: [SEMI](https://www.semi.org/en/semi-press-release/global-silicon-wafer-shipments-increase-13.4-percent-year-over-year-in-q3-2026-semi-reports)는 11/4 Q3 2026 세계 silicon wafer shipment가 전년동기 대비 13.4% 증가했다고 발표했습니다. 채용 실측은 아닙니다. [OpenLineage 1.55.0](https://openlineage.io/docs/releases/1-55-0/)은 dbt Core v2 live OTel과 `unique_id` job naming 변경 등을 포함했고, [MCP .mcpb](https://blog.modelcontextprotocol.io/posts/2026-11-03-mcpb-bundles/)는 11/3 portable bundle 채택을 알렸습니다.
- 전달: private [manufacturing-data-release-gate](https://github.com/ndndndn1/manufacturing-data-release-gate)에 12개 파일을 push하고 visibility=private·admin 권한·commit `64d8533`을 재확인했습니다. 외부인에게 메시지를 보내지 않았습니다.

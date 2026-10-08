# 주간 모듈 프로젝트 운영

목적: AI·데이터·제조 산업공학·반도체공정 채용 변화에서 실제 제안 가치가 있는 프로젝트를 매주 하나 구현합니다.
문맥: 2026-10-09 경력 프로젝트 요청. 코드와 검증 결과는 각 private 저장소, 이곳은 프로젝트 index만 관리합니다.

## 상태와 일정
토요일 오전(한국시간): 출처·전주 결과 점검, 프로젝트 선정, 계획·프로토타입.
일요일~목요일: 개선·검증. 금요일: 제안서·재현법·한계 작성.
2시간/일은 초기 운영 가정이며 다음 선정 때 실제 사용시간으로 조정합니다.
이번 주 후보: process-data-trust-gate (10/10~10/16). 현재 프로토타입 검증 완료, 새 저장소 생성 대기.

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

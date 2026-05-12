#!/bin/bash
# 자취연구소 Vercel 자동 배포 스크립트
# 토큰은 .vercel-token 파일에서 읽어옵니다

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TOKEN_FILE="$SCRIPT_DIR/.vercel-token"

if [ ! -f "$TOKEN_FILE" ]; then
  echo "ERROR: .vercel-token 파일을 찾을 수 없습니다."
  exit 1
fi

TOKEN=$(cat "$TOKEN_FILE" | tr -d '[:space:]')

echo "Deploying to Vercel..."
cd "$SCRIPT_DIR" && npx vercel deploy . --token="$TOKEN" --prod --yes

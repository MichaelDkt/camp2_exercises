curl -X POST 'Content-Type: application/json' -d 'foo=bar' "https://postman-echo.com/post?" | jq '.form' > 03_postman_api_post.result

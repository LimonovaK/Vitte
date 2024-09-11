import requests

oauth_token = ""


# Функция для создания видеовстречи
def create_conference(title: str = "Встреча", description: str = "Описание встречи"):
    """
    create_conference("Встреча №5", "Тема разговора: повышение зп")
    """
    url = "https://cloud-api.yandex.net/v1/telemost-api/conferences"

    headers = {
        "Authorization": f"OAuth {oauth_token}",
        "Content-Type": "application/json"
    }

    data = {
        "access_level": "PUBLIC",
        "live_stream": {
            "access_level": "PUBLIC",
            "title": title,
            "description": description
        }
    }

    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        return response.json()
    else:
        print("Error creating conference:", response.json())
        return None

# {
#   'join_url': 'https://telemost.yandex.ru/j/83692572147104',
#   'id': '83692572147104',
#   'live_stream': {
#       'watch_url': 'https://telemost.yandex.ru/live/28e0828e3fb44db29162a8e3c63782cc'
#   }
# }

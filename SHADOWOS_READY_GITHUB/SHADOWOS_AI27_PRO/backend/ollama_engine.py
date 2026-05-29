from openai import OpenAI

client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='ollama'
)

SYSTEM_PROMPT = '''
Você é a IA 27 do ShadowOS.

Seu comportamento deve ser parecido com ChatGPT:
- natural
- inteligente
- alinhado
- útil
- técnico
- seguro
- amigável
'''

def perguntar(msg):

    resposta = client.chat.completions.create(
        model='llama3',
        messages=[
            {
                'role': 'system',
                'content': SYSTEM_PROMPT
            },
            {
                'role': 'user',
                'content': msg
            }
        ]
    )

    return resposta.choices[0].message.content
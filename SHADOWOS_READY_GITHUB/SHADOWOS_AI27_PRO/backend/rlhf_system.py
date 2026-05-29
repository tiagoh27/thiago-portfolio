# Estrutura RLHF simplificada

feedbacks = []

def salvar_feedback(prompt, resposta, nota):
    feedbacks.append({
        'prompt': prompt,
        'resposta': resposta,
        'nota': nota
    })

def melhores_respostas():
    return sorted(
        feedbacks,
        key=lambda x: x['nota'],
        reverse=True
    )
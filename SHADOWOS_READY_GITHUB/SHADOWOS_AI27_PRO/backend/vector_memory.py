# Memória vetorial inicial

memoria = []

def salvar_contexto(texto):
    memoria.append(texto)

def buscar_contexto():
    return memoria[-10:]
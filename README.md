# Chamar 🧳⛺

> Sistema web de gestão de check-in e controle de pertences para eventos e acampamentos.

🌍 **[Acessar a Aplicação ao Vivo (Agape Chamar)](https://agapechamar.web.app/)**

## 🎯 O Problema

Durante a organização de encontros de jovens, a equipe de recepção (responsável por cerca de 120 participantes) enfrentava gargalos logísticos no recebimento de pertences (malas e colchões) e na alocação de dormitórios. 

O uso de formulários convencionais tornava a busca por características específicas das bagagens e participantes muito lenta. Além disso, o acesso à informação era restrito a poucas pessoas, dificultando a comunicação da equipe e o controle exato de quem já havia chegado e de quem ainda estava pendente.

## 💡 A Solução

O **Chamar** foi desenvolvido para substituir a dependência de planilhas e formulários estáticos por uma aplicação web centralizada e dinâmica. O sistema permite que qualquer membro da equipe acesse os dados, realize buscas rápidas de participantes e gerencie o fluxo de chegada de forma eficiente e segura, com dados sincronizados instantaneamente.

## ✨ Funcionalidades

- **Dashboard em Tempo Real:** Acompanhamento instantâneo de estatísticas de check-in (quantas pessoas já chegaram e quantas faltam).
- **Controle de Pendências:** Listagem automática indicando exatamente *quem* ainda não chegou ao local.
- **Gestão Detalhada de Pertences:** Registro e busca simplificada pelas características visuais da mala, tipo de colchão e número do dormitório.
- **Acesso Descentralizado:** Interface acessível para que qualquer pessoa da equipe de apoio possa consultar as informações rapidamente de seus próprios dispositivos.
- **Backup e Auditoria (Exportação para PDF):** Funcionalidade de geração de relatórios em PDF para garantir a integridade dos dados e servir como histórico de segurança, caso alguma ação de check-in seja desfeita acidentalmente.

## 🛠️ Tecnologias Utilizadas

Para garantir a sincronização instantânea dos dados e a alta disponibilidade do sistema, a seguinte stack foi utilizada:

- **Front-end:** HTML, CSS, JavaScript *(Nota: adicione aqui se usou algum framework como React ou Bootstrap)*
- **Backend as a Service (BaaS):** Firebase
- **Banco de Dados:** Firebase Realtime Database (responsável pela atualização em tempo real do status dos participantes)
- **Hospedagem / Deploy:** Firebase Hosting
- **Geração de Relatórios:** Geração dinâmica de arquivos PDF diretamente pela aplicação. *(Nota: se usou uma biblioteca específica como jsPDF, pode citar aqui)*

## 🚀 Impacto do Projeto

A aplicação foi utilizada com sucesso em produção para gerenciar a entrada de 119 participantes. A solução eliminou a lentidão da busca manual e democratizou o acesso à informação para a equipe, garantindo um processo de recepção muito mais ágil, organizado e com menor margem de erro logístico.

---

## 💻 Como Executar o Projeto Localmente

```bash
# Clone este repositório
$ git clone [https://github.com/sergiochou/Chamar.git](https://github.com/sergiochou/Chamar.git)

# Acesse a pasta do projeto
$ cd Chamar

# Como a aplicação utiliza a infraestrutura do Firebase, 
# você pode abrir o arquivo principal diretamente no navegador ou usar o Firebase CLI:
$ firebase serve

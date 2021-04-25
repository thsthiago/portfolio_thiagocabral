export default function handler(req, res) {
  try {
    const { method } = req

    if (method === 'GET') {
      res.status(200).json([
        {
          id: 1,
          titulo: 'Pomodoro.Dev',
          descricao:
            'Projeto desenvolvido durante a NLW4 - Next Level Week 4 oferecida pela Rocketseat. Foi adicionado a funcionalidade de login com usuário do Github, fazendo uma requisição a API de usuários do github e login apenas usando o username.',
          icons: ['/icons/nextjs.svg', '/icons/reactjs.svg'],
          tecnologias: ['Next JS', 'React JS'],
          images: [
            '/projetos/projeto 1/img4.gif',
            '/projetos/projeto 1/img1.svg',
            '/projetos/projeto 1/img2.svg',
            '/projetos/projeto 1/img3.svg'
          ],
          links: [
            'https://github.com/ths/pomodoro.dev',
            'https://pomodorodev.vercel.app'
          ]
        },
        {
          id: 2,
          titulo: 'Site wdc',
          descricao:
            'Projeto desenvolvido para colocar em prática meus conhecimentos em HTML, CSS e Javascript.',
          icons: ['/icons/html.svg', '/icons/css.svg', '/icons/javascript.svg'],
          tecnologias: ['Html', 'Css', 'JavaScript'],
          images: [
            '/projetos/projeto 2/img1.svg',
            '/projetos/projeto 2/img2.svg',
            '/projetos/projeto 2/img3.svg',
            '/projetos/projeto 2/img4.svg'
          ],
          links: ['https://github.com/thsthiago/wdc']
        },
        {
          id: 3,
          titulo: 'Viaja Tour',
          descricao:
            'Projeto do primeiro semestre da faculdade, foi desenvolvido um site com o tema Agência de Viagem. Fiquei responsável pela Logo, design do cabeçalho e rodapé padrão das páginas, desenvolvimento das páginas Home Page, Hotéis e Login.',
          icons: ['/icons/html.svg', '/icons/css.svg', '/icons/javascript.svg'],
          tecnologias: ['Html', 'Css', 'JavaScript'],
          images: [
            '/projetos/projeto 3/img1.svg',
            '/projetos/projeto 3/img2.svg',
            '/projetos/projeto 3/img3.svg'
          ],
          links: ['https://github.com/thsthiago/Projeto_ViajaTour']
        },
        {
          id: 4,
          titulo: 'Cartour',
          descricao:
            'Projeto do segundo semestre da faculdade, nesse projeto foi desenvolvido um banco de dados para uma concessionária. Fui responsável pela tabela de veículos, junto com o desenvolvimento das páginas de cadastro de veículos, listagem de veículos, alteração de dados e exclusão de veículos.',
          icons: [
            '/icons/html.svg',
            '/icons/css.svg',
            '/icons/javascript.svg',
            '/icons/php.svg',
            '/icons/mysql.svg'
          ],
          tecnologias: ['Html', 'Css', 'JavaScript', 'PHP', 'MySql'],
          images: [
            '/projetos/projeto 4/img1.svg',
            '/projetos/projeto 4/img2.svg',
            '/projetos/projeto 4/img3.svg'
          ],
          links: ['https://github.com/thsthiago/cartour']
        }
      ])
    } else {
      res.status(405).json({ message: 'Não aceita "POST"' })
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

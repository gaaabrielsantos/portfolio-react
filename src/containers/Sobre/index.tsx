import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      consequuntur aperiam non earum omnis suscipit quisquam amet beatae
      provident nostrum, enim fuga cupiditate ea ullam possimus dolore debitis
      error architecto?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gaaabrielsantos&show_icons=true&include_all_commits=true&count_private=true&title_color=ffffff&text_color=ffffff&bg_color=0d1117" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gaaabrielsantos&layout=compact&langs_count=10&title_color=ffffff&text_color=ffffff&bg_color=0d1117" />
    </GithubSecao>
  </section>
)

export default Sobre

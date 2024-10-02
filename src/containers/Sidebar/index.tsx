//import { type } from 'os'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Gabriel Santos</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        gaaabrielsantos
      </Paragrafo>
      <Descricao tipo="principal" fontSize={10}>
        Desenvolvedor Full-Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Light/Dark</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

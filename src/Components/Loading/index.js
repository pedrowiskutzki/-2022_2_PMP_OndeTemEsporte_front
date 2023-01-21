import loading from '../../images/loading.gif'

import { Container } from './styles'

function Loading(){
    return(
        <Container>
            <img src={loading} alt="loading"/>
        </Container>
    )
}

export default Loading
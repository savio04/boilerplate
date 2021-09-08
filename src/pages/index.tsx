import { Button } from 'components/Button'
import Head from 'next/head'
import { Logo, Wrapper, Description, Ilustration, Title } from './styles'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <Logo src="/img/logo.svg" alt="React Avançado" />
        <Title>React Avançado</Title>
        <Description>Typescript, Reactjs, Nextjs e Styled Component</Description>
        <Ilustration
          src="/img/hero-illustration.svg"
          alt="Desenvolvedor em frente ao computador"
        />
      </Wrapper>
    </>
  )
}

import { useState } from "react"
import Botao from "./components/Botao"
import Tela from "./components/Tela"
import Titulo from "./components/Titulo"

function App() {
  const [resultadoTela, setResultadoTela] = useState("0")
  const [esperandoNumero, setEsperandoNumero] = useState(true)

  // Função para colocar o digito na tela
  function mostrarNumeroNaTela(num) {
    if (resultadoTela === "0") {
      setResultadoTela(num)
    } else {
      setResultadoTela(resultadoTela + num)
    }
    setEsperandoNumero(false)
  }

  // Função para colocar o operador na tela
  function mostrarOperadorNaTela(op) {
    if (!esperandoNumero) {
      setResultadoTela(resultadoTela + op)
      setEsperandoNumero(true)
    }
  }

  // Função para limpar a tela
  function limparTela() {
    setResultadoTela("0")
    setEsperandoNumero(true)
  }

  // Função para calcular o resultado
  function calcularResultado() {
    let resultadoEquacao = Number(eval(resultadoTela))
    if (Number.isInteger(resultadoEquacao)) {
      setResultadoTela(String(resultadoEquacao.toFixed(0)))  // Sem casas decimais
    } else {
      setResultadoTela(String(resultadoEquacao.toFixed(2)))  // Duas casas decimais
    }
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-200 to-teal-500 ">
      <Titulo />
      <section className="bg-blue-900 p-5 flex flex-col gap-2 rounded-2xl max-w-75">
        <Tela resultado={resultadoTela} />
        <section className="flex gap-2">
          <section className=" grid grid-cols-3 grid-rows-4 gap-2 ">
            <Botao label={"1"} funcao={() => mostrarNumeroNaTela("1")}/>
            <Botao label={"2"} funcao={() => mostrarNumeroNaTela("2")}/>
            <Botao label={"3"} funcao={() => mostrarNumeroNaTela("3")}/>
            <Botao label={"4"} funcao={() => mostrarNumeroNaTela("4")}/>
            <Botao label={"5"} funcao={() => mostrarNumeroNaTela("5")}/>
            <Botao label={"6"} funcao={() => mostrarNumeroNaTela("6")}/>
            <Botao label={"7"} funcao={() => mostrarNumeroNaTela("7")}/>
            <Botao label={"8"} funcao={() => mostrarNumeroNaTela("8")}/>
            <Botao label={"9"} funcao={() => mostrarNumeroNaTela("9")}/>
            <Botao label={"0"} funcao={() => mostrarNumeroNaTela("0")}/>
            <Botao label={"AC"} funcao={() => limparTela()}/>
            <Botao label={"="} funcao={() => calcularResultado()}/>
          </section>
          <section className="grid grid-cols-1 grid-rows-4 gap-2">
            <Botao label={"+"} funcao={() => mostrarOperadorNaTela("+")}/>
            <Botao label={"-"} funcao={() => mostrarOperadorNaTela("-")}/>
            <Botao label={"*"} funcao={() => mostrarOperadorNaTela("*")}/>
            <Botao label={"/"} funcao={() => mostrarOperadorNaTela("/")}/>
          </section>
        </section>
      </section>
    </section>
  )
}

export default App

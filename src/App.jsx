import Botao from "./components/Botao"
import Tela from "./components/Tela"

function App() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <section className="bg-blue-900 p-5 flex flex-col gap-2 rounded-2xl">
        <Tela resultado="0" />
        <section className="flex gap-2">
          <section className=" grid grid-cols-3 grid-rows-4 gap-2 ">
            <Botao label={"1"} />
            <Botao label={"2"} />
            <Botao label={"3"} />
            <Botao label={"4"} />
            <Botao label={"5"} />
            <Botao label={"6"} />
            <Botao label={"7"} />
            <Botao label={"8"} />
            <Botao label={"9"} />
            <Botao label={"0"} />
            <Botao label={"AC"} />
            <Botao label={"="} />
          </section>
          <section className="grid grid-cols-1 grid-rows-4 gap-2">
            <Botao label={"+"} />
            <Botao label={"-"} />
            <Botao label={"*"} />
            <Botao label={"/"} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default App

import "./Login.css";

function Login() {
  return (
    <>
      <section class="Container-Formulario">
        <h2 class="Formulario-Titulo">Registrar</h2>
        <h3 class="Formulario-Titulo-Secundario">
          Preencha as informações abaixo:
        </h3>

        <div class="Formulario-Cadastro">
          <form action="#" class="Formulario-Dados">
            <div class="Formulario-Lista">
              <label class="Formulario-Label" for="nome">
                Nome completo
              </label>
              <input
                class="Formulario-Input"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome "
                required
              />
            </div>

            <div class="Formulario-Lista">
              <label class="Formulario-Label" for="email">
                E-mail
              </label>
              <input
                class="Formulario-Input"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="Formulario-Lista">
              <label class="Formulario-Label" for="senha">
                Senha
              </label>
              <input
                class="Formulario-Input"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                required
              />
            </div>

            <div class="Formulario-Lista">
              <label class="Formulario-Label" for="celular">
                Celular
              </label>
              <input
                class="Formulario-Input"
                type="tel"
                pattern="+[0-9]{2}([0-9]{2})[0-9]{5}-[0-9]{4}"
                id="celular"
                name="celular"
                placeholder="+xx(xx)xxxxx-xxxx"
                required
              />
            </div>

            <div class="Formulario-Botao">
              <input
                class="Formulario-Botao-Input"
                type="submit"
                value="Criar conta"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      // eslint-disable-next-line no-console
      console.log('foi');
      return newState;
    }
    default:
      return state;
  }
}

import ContextHelper from '../helpers/contextHelper';

describe('App Test', () => {
    it('should switch to native context and perform actions', async () => {
        try {
            await ContextHelper.switchToNativeContext();
            console.log('Realizando acciones en el contexto nativo...');
            // Aquí puedes llamar a otras funciones o interactuar con la app
        } catch (error) {
            console.error('Error al cambiar de contexto:', (error as Error).message);
            throw error;
        }
    });
    /* 
    it('should switch to webview context and perform actions', async () => {
        try {
            await ContextHelper.switchToWebViewContext();
            console.log('Realizando acciones en el contexto webview...');
            // Aquí puedes interactuar con elementos del webview
        } catch (error) {
            console.error('Error al cambiar de contexto:', (error as Error).message);
            throw error;
        }
    });
    */
});
class ContextHelper {
    /**
     * Cambia al contexto nativo de la aplicación.
     * @throws {Error} Si el contexto NATIVE_APP no está disponible.
     */
    async switchToNativeContext(): Promise<void> {
        console.log('Obteniendo contextos disponibles...');
        const rawContexts = await browser.getContexts(); // Obtener todos los contextos disponibles
        const contexts: string[] = Array.isArray(rawContexts) ? rawContexts.map(context => String(context)) : [];
        console.log('Available contexts:', contexts);

        if (!contexts.includes('NATIVE_APP')) {
            throw new Error('El contexto NATIVE_APP no está disponible.');
        }

        await browser.switchContext('NATIVE_APP'); // Cambiar al contexto nativo
        console.log('Contexto cambiado a NATIVE_APP.');
    }

    /**
     * Cambia al contexto webview de la aplicación.
     * @param webviewName - Nombre del contexto webview (por defecto, 'WEBVIEW').
     * @throws {Error} Si el contexto webview especificado no está disponible.
     */
    async switchToWebViewContext(webviewName: string = 'WEBVIEW'): Promise<void> {
        console.log('Obteniendo contextos disponibles...');
        const rawContexts = await browser.getContexts(); // Obtener todos los contextos disponibles
        const contexts: string[] = Array.isArray(rawContexts) ? rawContexts.map(context => String(context)) : [];
        console.log('Available contexts:', contexts);

        if (contexts.length === 1 && contexts[0] === 'NATIVE_APP') {
            console.error('Solo el contexto NATIVE_APP está disponible. Asegúrate de que el WebView esté activo.');
        }

        const webviewContext = contexts.find((context) => context.includes(webviewName));
        if (!webviewContext) {
            throw new Error(`El contexto ${webviewName} no está disponible.`);
        }

        await browser.switchContext(webviewContext); // Cambiar al contexto webview
        console.log(`Contexto cambiado a ${webviewContext}.`);
    }

    /**
     * Obtiene y devuelve todos los contextos disponibles.
     * @returns {Promise<string[]>} Lista de contextos disponibles.
     */
    async getAvailableContexts(): Promise<string[]> {
        const rawContexts = await browser.getContexts();
        const contexts: string[] = Array.isArray(rawContexts) ? rawContexts.map(context => String(context)) : [];
        console.log('Available contexts:', contexts);
        return contexts;
    }
}

export default new ContextHelper();
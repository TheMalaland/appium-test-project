describe('App Test', () => {
    it('should open Play Store, search for "metalslug", and return to the home screen', async () => {
        try {
            // Cambiar al contexto nativo
            console.log('Obteniendo contextos disponibles...');
            const contexts = await browser.getContexts(); // Obtener todos los contextos disponibles
            console.log('Available contexts:', contexts); // Imprimir los contextos disponibles
            await browser.switchContext('NATIVE_APP'); // Cambiar al contexto nativo
            console.log('Contexto cambiado a NATIVE_APP.');

            // Presionar el botón de inicio
            console.log('Presionando el botón de inicio...');
            await driver.pressKeyCode(3); // Código 3 corresponde al botón de inicio (HOME)
            console.log('Botón de inicio presionado.');

            // Esperar a que el ícono de Play Store esté visible
            console.log('Esperando a que el ícono de Play Store esté visible...');
            const playStoreIcon = await $('android=new UiSelector().description("Play Store")'); // Cambia "Play Store" si el texto es diferente
            await playStoreIcon.waitForDisplayed({ timeout: 5000 });
            console.log('Ícono de Play Store encontrado.');

            // Hacer clic en el ícono de Play Store
            console.log('Haciendo clic en el ícono de Play Store...');
            await playStoreIcon.click();
            console.log('Play Store abierta.');

            // Buscar el campo de búsqueda usando el selector con `instance(30)`
            console.log('Buscando el campo de búsqueda...');
            const searchFeature = await $('android=new UiSelector().text("Search")');
            await searchFeature.waitForDisplayed({ timeout: 5000 });
            console.log('Campo de búsqueda encontrado.');

            // Hacer clic en el campo de búsqueda para activarlo
            console.log('Haciendo clic en el campo de búsqueda...');
            await searchFeature.click();

            //do click on the search bar

            await browser.pause(2000); // Esperar un momento para asegurarse de que el campo de búsqueda esté activo
            const searchbar = await $('new UiSelector().text("Search apps & games")');
            await searchbar.click(); // Hacer clic en el campo de búsqueda para activarlo

            console.log('Escribiendo "metalslug" en el campo de búsqueda...');
            await searchbar.setValue('metalslug');

            // Enviar la búsqueda (simular presionar Enter)
            console.log('Realizando la búsqueda...');
            await searchbar.keys('Enter');
            console.log('Búsqueda realizada con éxito.');

            // Pausa opcional para observar el resultado
            await browser.pause(5000);

            // Volver a la pantalla de inicio
            console.log('Volviendo a la pantalla de inicio...');
            await driver.pressKeyCode(3); // Código 3 corresponde al botón de inicio (HOME)
            console.log('Regresaste a la pantalla de inicio.');
        } catch (error) {
            console.error('Error durante la ejecución:', error.message);
        }
    });
});
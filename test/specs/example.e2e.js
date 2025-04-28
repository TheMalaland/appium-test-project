describe('App Test', () => {
    it('should open Play Store, search for "metalslug", and return to the home screen', async () => {
        try {
            await switchToNativeContext();
            await pressHomeButton();
            await openPlayStore();
            await searchInPlayStore('metalslug');
        } catch (error) {
            console.error('Error durante la ejecución:', error.message);
        }
    });
});

// Función para cambiar al contexto nativo
async function switchToNativeContext() {
    console.log('Obteniendo contextos disponibles...');
    const contexts = await browser.getContexts(); // Obtener todos los contextos disponibles
    console.log('Available contexts:', contexts); // Imprimir los contextos disponibles
    await browser.switchContext('NATIVE_APP'); // Cambiar al contexto nativo
    console.log('Contexto cambiado a NATIVE_APP.');
}

// Función para presionar el botón de inicio
async function pressHomeButton() {
    console.log('Presionando el botón de inicio...');
    await driver.pressKeyCode(3); // Código 3 corresponde al botón de inicio (HOME)
    console.log('Botón de inicio presionado.');
}

// Función para abrir la Play Store
async function openPlayStore() {
    console.log('Esperando a que el ícono de Play Store esté visible...');
    const playStoreIcon = await $('android=new UiSelector().description("Play Store")'); // Cambia "Play Store" si el texto es diferente
    await playStoreIcon.waitForDisplayed({ timeout: 5000 });
    console.log('Ícono de Play Store encontrado.');
    console.log('Haciendo clic en el ícono de Play Store...');
    await playStoreIcon.click();
    console.log('Play Store abierta.');
}

// Función para buscar una app en la Play Store
async function searchInPlayStore(query) {
    console.log('Buscando el campo de búsqueda...');
    const searchFeature = await $('android=new UiSelector().text("Search")');
    await searchFeature.waitForDisplayed({ timeout: 5000 });
    console.log('Campo de búsqueda encontrado.');
    console.log('Haciendo clic en el campo de búsqueda...');
    await searchFeature.click();

    console.log('Esperando a que el menú de búsqueda se abra...');
    const searchMenuOption = await $('android=new UiSelector().textContains("Search apps & games")');
    await searchMenuOption.waitForDisplayed({ timeout: 5000 });
    console.log('Opción de búsqueda encontrada.');
    console.log('Haciendo clic en la opción de búsqueda...');
    await searchMenuOption.click();

    console.log(`Escribiendo "${query}" en el campo de búsqueda...`);
    const searchbar = await $('android=new UiSelector().className("android.widget.EditText")');
    await searchbar.waitForDisplayed({ timeout: 5000 });
    await searchbar.setValue(query);

    console.log('Presionando enter para buscar...');
    await driver.pressKeyCode(66); // Código 66 corresponde a la tecla Enter
    console.log('Búsqueda realizada.');
}
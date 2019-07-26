export function clearElements(clear = [])
{
    clear.map((e) => {
        e.tagName == 'INPUT' ? e.value = '' : e.innerHTML = '';
    });
}

export function extractInputs(container)
{
    let inputs = document.getElementById(container).getElementsByTagName('input');
    return inputs;
}
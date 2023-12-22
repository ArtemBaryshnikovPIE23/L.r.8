const list = document.querySelector('.element')
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})
  .then(response => response.json())
  .then((json) => json.forEach((element) => add_element(element)))

function add_element(element) {
    let new_element = document.createElement('div')
    let new_element_title = document.createElement('h1')
    let new_element_body = document.createElement('p')
    new_element.classList.add('element')
    new_element.append(new_element_title)
    new_element.append(new_element_body)
    new_element.lastChild.textContent = element['body']
    list.append(new_element)
}
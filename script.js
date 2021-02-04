let add = document.getElementById("add_but");
let where = document.querySelector(".todo");
add.addEventListener('click', function() {
    let text_to_add = document.getElementById("list_stuff").value;
    let input = document.createElement("input");
    input.value = text_to_add;
    input.disabled = true;
    input.classList.add("item_ip");
    input.type = "text";

    let del_bttn = document.createElement("button");
    del_bttn.classList.add("deleter");
    del_bttn.innerHTML = "Delete";
    let box = document.createElement('div');
    box.classList.add("item");

    del_bttn.addEventListener('click', function() {
        where.removeChild(box);
    })

    where.appendChild(box);
    box.appendChild(input);
    box.appendChild(del_bttn);
})

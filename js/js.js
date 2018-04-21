


$('.btn').on('click', function(){
        var newTask=prompt('what is the next task?');
        console.log('newTask: ', newTask);

// placing newTask into HTML
        var addedTask= '<li> <span>'+newTask+'</span> <i class="fa fa-trash-o" aria-hidden="true"></i></li>'
// targeting 'ul' with a id 'task-list and appending the addedtask        
        $('#task-list').append(addedTask);
});


$('.fa').click(function(){
    console.log(this);
    $(this).parent().remove();
})
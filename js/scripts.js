
function newItem(){

    //jQuery
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue === '') {
            alert("You must write something!");
        } else {
            $('#list').append(li);
        }
        
    //2. Crossing out an item from the list of items:

        li.on("dblclick", function (){
            li.toggleClass("strike");
        });

       

    //3(i). Adding the delete button "X": 
         
        let deleteButton = $('<deleteButton></deleteButton>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
   
        
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        deleteButton.on("click", deleteListItem);
        function deleteListItem(){
        		li.addClass("delete")
        	}

    // 4. Reordering the items: 
       $('#list').sortable();
    
    }

    
    
    
    
    
    
    
    
    
    
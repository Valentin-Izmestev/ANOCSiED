class StarRating{ 
    constructor(rating){
        this.rating = rating;
        this.ratingItems = document.querySelectorAll('.star-rating__item input');
    }  
    init(){
        this.ratingItems.forEach((item, index)=>{
            item.addEventListener('input', ()=>{ 
            this.fillRating(index)
            });
        });
    }
    fillRating = (index)=>{ 
        this.ratingItems.forEach((item, currentIndex)=>{
            if(currentIndex <= index){
                item.checked = true;
            }else{
                item.checked = false;
            }
        });
    }
}
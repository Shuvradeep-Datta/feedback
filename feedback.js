console.log("Feedback js Loaded");

const feedbackform =document.getElementById("feedback_form");
// const feedbackHeading= document.getElementById("form_heading");

const feedbackHeading = document.querySelector("#form_heading");
console.log(feedbackHeading);

const clearButton = document.getElementById("clearButton");
// console.log(clearButton);

const feedbackItemContainer = document.getElementById('feedback_item_container');






clearButton.addEventListener("click",()=>{
    console.log("Clear button clicked")
    // feedbackHeading.innerHTML="Submit Your Feedback"
//    feedbackHeading.style.color='red'
    // feedbackHeading.style.background ="yellow"
    feedbackHeading.classList.add("text-2xl");
    feedbackHeading.classList.add("font-bold")
    
});


//load feedbacks
function loadFeedbacks(){
    //getting data from localstorage and parsing to array

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks"))||[];
    feedbackItemContainer.innerHTML="";
    feedbacks.forEach((item) => {
        console.log(item);

        const feedItem=` <div class="flex flex-col gap-2 p-2 mt-2 bg-gray-700 rounded-lg list_item">
        <div class="flex flex-col justify-between lg:flex-row">
          <h1 class="text-2xl font-bold" >${item.name}</h1>
        <h1 class="text-xl font-bold text-gray-400">${item.email}</h1>
        </div>
        <p>${item.message}</p>
        <div class="flex justify-between">
        <h1 class="text-gray-400">Rating: ${item.rating}</h1>
        <div>
        <button onclick="deleteFeedback('${item.email}')" class='px-2 py-2 bg-red-600 text-sm hover:bg-red-400 rounded-lg' >Delete</button>
        </div>
        
        </div>
      </div>`;
      feedbackItemContainer.innerHTML=
        feedbackItemContainer.innerHTML+feedItem

    });
    
}


function deleteFeedback(id){
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks"))||[];
    // const newFeedbacks = feedbacks.filter((item)=>item.email!=id);
    // localStorage.setItem("feedbacks",JSON.stringify(newFeedbacks));
    console.log(feedbacks);


    //remove the feedback of given id
    const newFeedbackList=feedbacks.filter((item)=>{
        return  item.email!=id;
    });


    console.log(newFeedbackList);
    //update new List to localstorage
    localStorage.setItem("feedbacks",JSON.stringify(newFeedbackList));
    loadFeedbacks();
   
    
}




loadFeedbacks();


//Save data to localstorage
function saveToLocalStorage(feedback){
    // console.log(feedback);

const feedbacks = JSON.parse(localStorage.getItem("feedbacks"))||[]
feedbacks.push(feedback);

localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
console.log("feedback saved");
feedbackform.reset();
loadFeedbacks();

}


feedbackform.addEventListener("submit",(event)=>{
    event.preventDefault();


    const name =document.getElementById("name").value;
    const email = document.getElementById("email").value
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;


    console.log(name);
    console.log(email);
    console.log(rating);
    console.log(message);

    const feedbackObject = {name,email,rating,message};
    // console.log(feedbackObject);
    saveToLocalStorage(feedbackObject);
});
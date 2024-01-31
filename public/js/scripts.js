function alert1(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}

function alert2(){
    Swal.fire("SweetAlert2 is working!");

}

function alert3(){
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}

function alert4(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

function alert5(){
    Swal.fire({
        imageUrl: "https://placeholder.pics/svg/300x1500",
        imageHeight: 1500,
        imageAlt: "A tall image"
      });
}

function alert6(){
    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html: `
          You can use <b>bold text</b>,
          <a href="#">links</a>,
          and other HTML tags
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });
}

function alert7(){
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function alert8(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
}

function alert9(){
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}

function alert10(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}


function alert10(){
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
}

function alert10(){
    Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
}

function alert10(){
    let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}
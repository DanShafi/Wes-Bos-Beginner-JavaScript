const link = document.querySelector('.link');
link.addEventListener('click', e => {
  const shouldRedirect = confirm('Do you wish to proceed?');
  if (!shouldRedirect) {
    e.preventDefault();
  }
});

// Working with Forms

const signUpForm = document.querySelector('[name="signup"');
signUpForm.addEventListener('submit', function(e) {
  const name = e.currentTarget.name.value;
  if (name.includes('Chad')) {
    alert('This name is forbidden');
    e.preventDefault();
  }
});

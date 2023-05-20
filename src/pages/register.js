import { useRouter } from "next/router";
import React from "react";




function Register(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <div>
<h1>Register Page</h1>
<div class="mb-3">
  <label for="formFile" class="form-label">User Name</label>
  <input class="form-control" type="" id="formFile"/>
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">First Name</label>
  <input class="form-control" type="" id="formFileMultiple" multiple/>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Last Name</label>
  <input class="form-control" type="" id="formFileDisabled" disabled/>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Password</label>
  <input class="form-control form-control-sm" id="formFileSm" type=""/>
</div>
<div>
  <label for="formFileLg" class="form-label">Confirm Password</label>
  <input class="form-control form-control-lg" id="formFileLg" type=""/>
</div>

<div>
  <label for="formFileLg" class="form-label">Email</label>
  <input class="form-control form-control-lg" id="formFileLg" type=""/>
</div>

<div>
  <label for="formFileLg" class="form-label">Gender</label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<button type="submit" class="btn btn-primary">Register</button>
</div>

        </div>
    )
}

export default Register
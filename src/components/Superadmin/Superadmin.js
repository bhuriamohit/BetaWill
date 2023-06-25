import React, { useState } from "react";
import CourseForm from "../VideoPlayer/VideoUploader";
import TestUploadForm from "./TestUploader";
import PdfUploader from '../StudyMaterial/PdfUploader'
const Superadmin=()=>
{
    const [pagestatus,setpagestatus]=useState(null)
    return(
        <div>
            <h2>SuperAdmin.........</h2>
            <button onClick={()=>setpagestatus("lectures")}>Upload Lectures</button>
            <button onClick={()=>setpagestatus("tests")}>Upload Tests</button>
            <button onClick={()=>setpagestatus("studymaterial")}>Upload Study Material</button>
            {pagestatus=="lectures" && <CourseForm/>}
            {pagestatus=="tests" && <TestUploadForm/>}
            {pagestatus=="studymaterial" && <PdfUploader/>}
        </div>
    )
}

export default Superadmin;
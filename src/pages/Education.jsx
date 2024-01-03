import React from "react";
import { Autocomplete, TextField } from "@mui/material";
const Education = () => {
    const educationList = [{ id: 1, name: 'دیپلم' }, { id: 2, name: 'کاردانی' }, { id: 3, name: 'کارشناسی' }, { id: 4, name: 'کارشناسی ارشد' }, { id: 5, name: 'دکترا' }]
    return (
        <div className="flex flex-col w-2/3  items-end">
            <h1 className="m-2">اطلاعات آخرین مدرک تحصیلی خود را وارد کنید</h1>
            <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={educationList}
                autoHighlight
                getOptionLabel={(option) => option?.name}
                renderOption={(props, option) => (
                    <div {...props}>

                        {option.name}
                    </div>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="مقطع دانشگاهی"

                    />
                )}
            />
            <TextField />
        </div>
    )
}
export default Education;
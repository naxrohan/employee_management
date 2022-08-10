<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'last_name' => ['required','string','max:100'],
            'first_name' => ['required','string','max:100'],
            'middle_name' => ['string','max:100'],
            'address' => ['required','string','max:512'],
            'zip_code' => ['required', 'string'],
            'birthdate' => ['required'],
            'department_id' => ['required', 'integer'],
            'country_id' => ['required', 'integer'],
            'state_id' => ['required', 'integer'],
            'city_id' => ['required', 'integer'],
            // 'date_hired' => ['required']
        ];
    }
}

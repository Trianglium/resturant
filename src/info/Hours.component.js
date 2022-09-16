import React from 'react';

function HoursSection() {
    return(
        <div className="opening-time">
            <h3 className='text-center'>
            Hours
            </h3>
            <table id="hours-of-operation" class="table table-borderless ws-no-wrap">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>10:00 AM</td>
                        <td>&#8211;</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10:00 AM</td>
                        <td>&#8211;</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11:00 AM</td>
                        <td>&#8211;</td>
                        <td> 8:30 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default HoursSection;
import axios from "axios";
import {  useState } from "react";



const token="eyJraWQiOiJiMDk2ODNlNS03YTZjLTQzMDUtOTIwNi05N2NhYmI2ZTVkMDMiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJhdWQiOiJtYXN0ZXIiLCJuYmYiOjE2ODU0NDM0MzgsInNjb3BlIjpbImFwaS5yZWFkIl0sImlzcyI6Imh0dHA6Ly9tYXN0ZXIucmV2ZWwtZGV2LnRlc3Q6ODA1MSIsImV4cCI6MTY4NTQ0NTIzOCwiaWF0IjoxNjg1NDQzNDM4LCJhdXRob3JpdGllcyI6WyJNYXN0ZXIgQWRtaW4iLCJDb25uZWN0b3IiLCJVc2VyIiwiQ29ubmVjdG9yX1VwZGF0ZSIsIkNvbm5lY3Rvcl9BZGQiLCJUZW5hbnRfVXBkYXRlIiwiUm9sZV9VcGRhdGUiLCJVc2VyX0FkZCIsIkRhdGFzZXRfVmlldyIsIlRlbmFudCIsIkNvbm5lY3RvckNvbmZpZ19WaWV3IiwiVGVuYW50X0FkZCIsIlRlbmFudF9WaWV3IiwiUm9sZV9EZWxldGUiLCJEYXRhc2V0X1VwZGF0ZSIsIlJvbGVfQWRkIiwiRGF0YXNldF9EZWxldGUiLCJSb2xlX1ZpZXciLCJDb25uZWN0b3JDb25maWciLCJEYXRhc2V0IiwiRGF0YXNldF9BZGQiLCJDb25uZWN0b3JDb25maWdfRGVsZXRlIiwiQ29ubmVjdG9yQ29uZmlnX0FkZCIsIkNvbm5lY3RvckNvbmZpZ19VcGRhdGUiLCJSb2xlIiwiVXNlcl9EZWxldGUiLCJVc2VyX1VwZGF0ZSIsIkNvbm5lY3Rvcl9EZWxldGUiLCJUZW5hbnRfRGVsZXRlIiwiVXNlcl9WaWV3IiwiQ29ubmVjdG9yX1ZpZXciXX0.KtrYAM3NiVsS2zbFLVdVNwBTjys5vVF56O8dKckY_wKLOzEq8BAlh0t8gCy3K6lLYJ4YtdZAihC-tgQxcdTpY65luMoO9YE8wmZPXoSbGENwyF1YLoTFWGzTwD1CcU-u6Yz9r_WyXAjkOEloS9aNbZmVYr8I2C0xPSa1UYuc61f7hihgEOvUvhMlEfLS94aUpPjHY7fOphNCm6G4Sbbp--npV6ZnwHseXYc5QnCnc6WjAA340O17R6A07n67bIEYMEJdIXo764q9PwCmSYWcUnBgpgcVDtKE5z_hiF5BbqkHHZcjcoeLxWha17-Ty6wV9F7dR4UzZRHwhYpLi650bw";

const ApiCalling=()=>{
    const [data, setData]= useState({
        email: "",
        password: ""
      });
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password,
          token,
        };
        axios
          .post("http://master.revel-dev.test:8051/oauth2/authorize", userData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
          });
      };
    
      return (
        <div>
          <h1>Login Account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      );
}
export default ApiCalling;
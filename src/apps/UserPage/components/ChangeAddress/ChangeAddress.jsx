import React from 'react';
import styles from '../ChangeAddress/ChangeAddress.module.scss'
import SelectField from '../../../../components/SelectField/SelectField'
import InputField from '../../../../components/InputField/InputField';


function ChangeAddress() {
  const wards = ["--Choose--", " Lộc Thọ", "Phường Ngọc Hiệp", "Phường 10", "Phường 15", "Phường Trúc Bạch", "Phường Cống Vị"];
  const districts = ["--Choose--","Quận 1", "Quận Bình Thạnh", "Quận Gò Vấp,"];
  const cities = ["--Choose--","Hồ Chí Minh", "Nha Trang", "Hà Nội", "Đà Nẵng"];
  const field = { label: 'Address *', type: 'address', placeholder: 'Enter your address' }
    
  
  return (
    <div className={styles.addressForm}>
      <h2>Update address</h2>
      <form>
        <div className={styles.upper}>
          <SelectField
            label="City *"
            options={cities}
            placeholder="--Choose--"
            className={styles.className} 
          />          
          <SelectField
            label="Ward *"
            options={wards}
            placeholder="--Choose--"
            className={styles.className}
          />
        </div>
        <div className={styles.lower}>
          <SelectField
            label="District *"
            options={districts}
            placeholder="--Choose--"
            className={styles.className}
          />
          <InputField
            label={field.label} 
            type={field.type} 
            placeholder={field.placeholder} 
            className={styles.className} 
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}


// function ChangeAddress() {

//   const wards = ["Phường Lộc Thọ", "Phường Ngọc Hiệp", "Phường 10", "Phường 15", "Phường Trúc Bạch", "Phường Cống Vị"];
//   const districts = ["Quận 1", "Quận Bình Thạnh", "Quận Gò Vấp,"];
//   const cities = ["Hồ Chí Minh", "Nha Trang", "Hà Nội"];

//   return (
//     <div className={styles.addressForm}>
//       <h2>Cập nhật địa chỉ</h2>
//       <form>
//         <div className={styles.upperAddressFields}>
//           <label>
//             Địa chỉ*
//             <input type="address" placeholder="Nhập vào địa chỉ của bạn" />
//           </label>
        
//           <label>
//             Phường*
//             <select>
//               <option value="">Chọn</option> {/* Thêm dòng này */}
//               {wards.map((ward) => (
//                 <option value={ward}>{ward}</option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div className={styles.lowerAddressFields}>       
//           <label>
//             Quận*
//             <select>
//               <option value="">Chọn</option> {/* Thêm dòng này */}
//               {districts.map((district) => (
//                 <option value={district}>{district}</option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Thành Phố*
//             <select>
//               <option value="">Chọn</option> {/* Thêm dòng này */}
//               {cities.map((city) => (
//                 <option value={city}>{city}</option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <button type="submit">Lưu</button>
//       </form>
//     </div>
//   );
// }



export default ChangeAddress;

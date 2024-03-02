import React from 'react';
import styles from '../ChangeAddress/ChangeAddress.module.scss'
import SelectField from '../../../../components/SelectField/SelectField'


function ChangeAddress() {
  const wards = [" Lộc Thọ", "Phường Ngọc Hiệp", "Phường 10", "Phường 15", "Phường Trúc Bạch", "Phường Cống Vị"];
  const districts = ["Quận 1", "Quận Bình Thạnh", "Quận Gò Vấp,"];
  const cities = ["Hồ Chí Minh", "Nha Trang", "Hà Nội", "Đà Nẵng"];

  
  return (
    <div className={styles.addressForm}>
      <h2>Cập nhật địa chỉ</h2>
      <form>
        <div className={styles.upperAddressFields}>
          <label>
            Địa chỉ*
            <input type="address" placeholder="Nhập vào địa chỉ của bạn" />
          </label>
        </div>
        <div className={styles.lowerAddressFields}> 
          <SelectField
            label="Thành Phố*"
            options={cities}
            placeholder="Chọn"
            className={styles.className}
          />          
          <SelectField
              label="Phường*"
              options={wards}
              placeholder="Chọn"
              className={styles.className}
          />
          <SelectField
            label="Quận*"
            options={districts}
            placeholder="Chọn"
            className={styles.className}
          />
        </div>
        <button type="submit">Lưu</button>
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

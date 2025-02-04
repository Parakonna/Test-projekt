import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { IoIosRemove } from 'react-icons/io';
import ResizableSlider from '../ResizableSlider/ResizableSlider';

import css from './Slis.module.css';

const Slis = () => {
  const [waterData, setWaterData] = useState({
    norma: 2000, // Отримуємо з БД
    percentage: 40, // Отримуємо з БД
  });

  const step = (250 * 100) / waterData.norma;

  const onChange = value => {
    setWaterData({
      ...waterData,
      percentage: value,
    });
    /*  savePercentageToDB(value); */
  };

  const percentage = parseInt(waterData.percentage, 10) || 0;
  console.log(waterData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.section}>
      <div className={css.radio}>
        <h3 className={css.title}>Today</h3>
        <ResizableSlider
          percentage={percentage}
          onChange={onChange}
          step={step}
        />

        <div className={css.percent}>
          <div className={css.percent_icon}>
            <IoIosRemove className={css.icon} />
            <IoIosRemove className={css.icon} />
            <IoIosRemove className={css.icon} />
          </div>
          <div className={css.percent_number}>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className={css.btn_section}>
        <button
          className={css.btn}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          <GrAddCircle className={css.icon_btn} />
          <span>Add Water</span>
        </button>
        {isModalOpen && <></>}
      </div>
    </div>
  );
};

export default Slis;

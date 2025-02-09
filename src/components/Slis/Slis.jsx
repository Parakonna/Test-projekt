import { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { IoIosRemove } from 'react-icons/io';
import ResizableSlider from '../ResizableSlider/ResizableSlider';

import css from './Slis.module.css';

const Slis = () => {
  const [waterData, setWaterData] = useState({
    norma: '1.5L', // норма приходить у форматі "1.5L"
    percentage: '40%', // відсоток приходить у форматі "40%"
  });
  /*  const [isModalOpen, setIsModalOpen] = useState(false); */

  // Перетворюємо значення в числа
  const norma = parseFloat(waterData.norma) * 1000; // 1.5L → 1500 мл
  const percentage = Number(parseFloat(waterData.percentage).toFixed(1)) || 0;

  // Крок для шкали (наприклад, 250 мл)
  const step = (250 * 100) / norma; // Формула для розрахунку кроку в %

  // Обробка зміни значення слайдера
  const onChange = value => {
    const roundedValue = Number(value.toFixed(1)); // Округлюємо до 1 знаку після коми
    setWaterData({
      ...waterData,
      percentage: `${roundedValue}%`,
    });
    /* savePercentageToDB(roundedValue); */ // Збереження у БД (якщо потрібно)
  };

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
        {/*  {isModalOpen && (
          <TodayListModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            operationType="add"
          />
        )} */}
      </div>
    </div>
  );
};

/* https://github.com/remezovskyi2508/h2o-tracker-ui/pull/13 
// https://github.com/remezovskyi2508/h2o-tracker-ui/pull/13*/
/* https://github.com/remezovskyi2508/h2o-tracker-ui/pull/22*/
/* https://github.com/remezovskyi2508/h2o-tracker-ui/pull/40 */

export default Slis;

"use client";

import styles from "./exchangeRefuseModal.module.css";
import Image from "next/image";
import CloseIcon from "@/public/icons/ic_close.svg";

const ExchangeRefuseModal = ({ cardGrade, cardTitle, onClose }) => {
  const cardInfoText = `[${cardGrade} | ${cardTitle}]`;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src={CloseIcon} alt="Close" width={32} height={32} />
        </button>
        <h2 className={styles.title}>교환 제시 거절</h2>
        <p className={styles.description}>
          {cardInfoText} 카드와의 교환을 거절하시겠습니까?
        </p>
        <button className={styles.confirmButton} onClick={onClose}>
          거절하기
        </button>
      </div>
    </div>
  );
};

export default ExchangeRefuseModal;

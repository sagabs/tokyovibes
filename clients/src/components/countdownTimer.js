import React from "react";
import DateTimeDisplay from "../components/dateTimeDisplay";
import useCountdown from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Waktu Habis!</span>
      <p>
        Transaksi Dibatalkan <br />
        Mohon Pesan Kembali Barang Yang Anda Pilih
      </p>
    </div>
  );
};

const ShowCounter = ({ Jam, Menit, Detik }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={Jam} type={"Jam"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={Menit} type={"Menit"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={Detik} type={"Detik"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [Jam, Menit, Detik] = useCountdown(targetDate);

  if (Jam + Menit + Detik <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter Jam={Jam} Menit={Menit} Detik={Detik} />;
  }
};

export default CountdownTimer;

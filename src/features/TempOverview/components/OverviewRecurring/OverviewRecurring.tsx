export const OverviewRecurring = () => {
  return (
    <div className="overview-section-recurring">
      <div className="osr-header">
        <h3>Recurring Bills</h3>
        <div>
          <p>See Details</p>
          <span>x</span>
        </div>
      </div>
      <div className="osr-content">
        <div>
          <p>Paid Bills</p>
          <span>$190.00</span>
        </div>
        <div>
          <p>Total Upcoming</p>
          <span>$194.98</span>
        </div>
        <div>
          <p>Due Soon</p>
          <span>$59.48</span>
        </div>
      </div>
    </div>
  );
};

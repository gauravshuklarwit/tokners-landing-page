import { formatDate } from "@/lib/utils";

interface FormattedDateProps {
  date: Date;
  className?: string;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  className,
}) => {
  const isoDate = date.toISOString().split("T")[0];
  const displayDate = formatDate(date);

  return (
    <time dateTime={isoDate} className={className}>
      {displayDate}
    </time>
  );
};

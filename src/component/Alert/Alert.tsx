import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";

interface IAlert {
  title: string;
  description: string;
  icon: ReactNode;
  type: string;
}

export function Alert({ title, icon, type, description }: IAlert) {
  return (
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            <span>
              {icon}
            </span>
            <h3>{title}</h3>
          </div>
          <X className="close" size={25} />
        </div>
        <p>
          {description}
        </p>
      </div>
  );
}

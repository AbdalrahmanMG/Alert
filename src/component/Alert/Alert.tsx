import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../types/types";

interface IAlert {
  type: AlertTypes;
  title: string;
  description?: string;
  children?: ReactNode;
  icon: ReactNode;
}

export function Alert({ title, icon, type, description, children }: IAlert) {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h3>{title}</h3>
        </div>
        <X className="close" size={25} />
      </div>
      {children? children: <p>{description}</p>}
    </div>
  );
}

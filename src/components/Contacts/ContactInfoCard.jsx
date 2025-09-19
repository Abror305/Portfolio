import React from "react";

export default function ContactInfoCard({ Icon, title, description, color }) {
    return (
        <div className={`card border-l-4 ${color} bg-base-200/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-transform hover:scale-105 p-4 flex items-center `}>
            <div className="text-3xl text-primary/80">{Icon && <Icon />}</div>
            <div className="flex-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-base-content/70">{description}</p>
            </div>
        </div>

    );
}

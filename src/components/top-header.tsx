import { Share2, ExternalLink } from 'lucide-react';
import { Header } from "./header";
import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "./profile-dropdown";
import ChangePassword from "./user/change-password";
import { useState } from "react";

const NAV_ITEMS = [
    { name: "Proxies", to: "/" },
    { name: "API Keys", to: "/api-keys" },
    {
        name: "Docs",
        to: "https://github.com/avashForReal/caddy-control",
        newTab: true,
        icon: <ExternalLink strokeWidth={1.5} width={16} height={16} />
    },
];


const TopHeader = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);

    const openPasswordDialog = () => setPasswordDialogOpen(true);
    const closePasswordDialog = () => setPasswordDialogOpen(false);

    return (
        <>
            <Header>
                <div className='flex items-center justify-between gap-4 w-full'>
                    {/* logo */}
                    <div className="flex items-center justify-start gap-2">
                        <Share2 strokeWidth={1.25} size={24} />
                        <div className="text-lg font-bold text-gray-700">
                            Caddy Control
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        {NAV_ITEMS.map(({ name, to, icon, newTab }) => (
                            <Link
                                key={to}
                                to={to}
                                target={newTab ? "_blank" : "_self"}
                                className={`relative px-3 py-1 text-gray-800 transition-all ${pathname === to
                                    ? "font-semibold border-b border-black"
                                    : "hover:text-black"
                                    }`}
                            >
                                <span className="flex items-center justify-start gap-1">
                                    {name}
                                    {icon}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* user actions */}
                    <div className="flex items-center justify-end gap-2">
                        <ProfileDropdown
                            openPasswordDialog={openPasswordDialog}
                        />
                    </div>
                </div>
            </Header>
            <ChangePassword
                title="Reset your password!"
                description="Please create a new password for your account."
                open={passwordDialogOpen}
                onClose={closePasswordDialog}
            />
        </>
    );
};

export default TopHeader;
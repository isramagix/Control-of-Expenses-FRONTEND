import UserProfileForm from "../modules/settings/components/UserProfileForm";
import CategoryList from "../modules/settings/components/CategoryList";
import NotificationPreferences from "../modules/settings/components/NotificationPreferences";
import BudgetSettings from "../modules/settings/components/BudgetSettings";
import DangerZone from "../modules/settings/components/DangerZone";

const Configuracion = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserProfileForm />
        <CategoryList />
        <NotificationPreferences />
        <BudgetSettings />
      </div>
      <DangerZone />
    </div>
  );
};

export default Configuracion;

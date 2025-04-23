const FeatureCategory = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="space-y-5">
    <h3 className="text-sm font-medium text-primary-400 uppercase tracking-wider pb-2 border-b border-gray-800/50">{label}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

export default FeatureCategory;
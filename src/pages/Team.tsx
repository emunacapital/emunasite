
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Linkedin, Mail, Plus, Edit3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  experience: string;
  education: string;
  email: string;
  linkedin: string;
  image: string;
}

const initialTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Eduardo Silva",
    position: "Managing Partner",
    bio: "Mais de 20 anos de experiência em M&A e mercado de capitais, liderou transações superiores a R$ 10 bilhões.",
    experience: "Ex-Goldman Sachs, Ex-BTG Pactual",
    education: "MBA Wharton, Engenharia USP",
    email: "carlos.silva@emunacapital.com",
    linkedin: "linkedin.com/in/carlossilva",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Ana Paula Rodrigues",
    position: "Senior Partner",
    bio: "Especialista em private equity e venture capital com track record em investimentos de crescimento.",
    experience: "Ex-Blackstone, Ex-Península Participações",
    education: "MBA Stanford, Economia FGV",
    email: "ana.rodrigues@emunacapital.com",
    linkedin: "linkedin.com/in/anarodrigues",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces"
  }
];

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [newMember, setNewMember] = useState<Partial<TeamMember>>({
    name: "",
    position: "",
    bio: "",
    experience: "",
    education: "",
    email: "",
    linkedin: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces"
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.position) {
      const member: TeamMember = {
        id: Date.now(),
        name: newMember.name || "",
        position: newMember.position || "",
        bio: newMember.bio || "",
        experience: newMember.experience || "",
        education: newMember.education || "",
        email: newMember.email || "",
        linkedin: newMember.linkedin || "",
        image: newMember.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces"
      };
      setTeamMembers([...teamMembers, member]);
      setNewMember({
        name: "",
        position: "",
        bio: "",
        experience: "",
        education: "",
        email: "",
        linkedin: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces"
      });
      setIsAddingMember(false);
    }
  };

  const handleEditMember = (member: TeamMember) => {
    const updatedMembers = teamMembers.map(m => 
      m.id === member.id ? member : m
    );
    setTeamMembers(updatedMembers);
    setEditingMember(null);
  };

  const handleDeleteMember = (id: number) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nossa Equipe</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Profissionais experientes unidos pela paixão em criar valor 
              através de transações estratégicas e soluções inovadoras.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Sócios & Diretores</h2>
              <p className="text-gray-600 mt-2">Conheça os líderes que guiam nossa estratégia</p>
            </div>
            <Button 
              onClick={() => setIsAddingMember(true)}
              className="bg-blue-900 hover:bg-blue-800"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Membro
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingMember(member)}
                    className="bg-white/90"
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteMember(member.id)}
                    className="bg-white/90 text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-semibold mb-3">{member.position}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Experiência</span>
                      <p className="text-sm text-gray-700">{member.experience}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Formação</span>
                      <p className="text-sm text-gray-700">{member.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Member Dialog */}
      <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Membro</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cargo</label>
                <Input
                  value={newMember.position}
                  onChange={(e) => setNewMember({...newMember, position: e.target.value})}
                  placeholder="Ex: Senior Partner"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <Textarea
                value={newMember.bio}
                onChange={(e) => setNewMember({...newMember, bio: e.target.value})}
                placeholder="Breve descrição profissional"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Experiência</label>
                <Input
                  value={newMember.experience}
                  onChange={(e) => setNewMember({...newMember, experience: e.target.value})}
                  placeholder="Ex: Ex-Goldman Sachs"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Formação</label>
                <Input
                  value={newMember.education}
                  onChange={(e) => setNewMember({...newMember, education: e.target.value})}
                  placeholder="Ex: MBA Harvard"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                  placeholder="email@emunacapital.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">LinkedIn</label>
                <Input
                  value={newMember.linkedin}
                  onChange={(e) => setNewMember({...newMember, linkedin: e.target.value})}
                  placeholder="linkedin.com/in/perfil"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">URL da Foto</label>
              <Input
                value={newMember.image}
                onChange={(e) => setNewMember({...newMember, image: e.target.value})}
                placeholder="https://exemplo.com/foto.jpg"
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddMember} className="bg-blue-900 hover:bg-blue-800">
                Adicionar Membro
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Member Dialog */}
      {editingMember && (
        <Dialog open={!!editingMember} onOpenChange={() => setEditingMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Editar Membro</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    value={editingMember.name}
                    onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cargo</label>
                  <Input
                    value={editingMember.position}
                    onChange={(e) => setEditingMember({...editingMember, position: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <Textarea
                  value={editingMember.bio}
                  onChange={(e) => setEditingMember({...editingMember, bio: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Experiência</label>
                  <Input
                    value={editingMember.experience}
                    onChange={(e) => setEditingMember({...editingMember, experience: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Formação</label>
                  <Input
                    value={editingMember.education}
                    onChange={(e) => setEditingMember({...editingMember, education: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={editingMember.email}
                    onChange={(e) => setEditingMember({...editingMember, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn</label>
                  <Input
                    value={editingMember.linkedin}
                    onChange={(e) => setEditingMember({...editingMember, linkedin: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">URL da Foto</label>
                <Input
                  value={editingMember.image}
                  onChange={(e) => setEditingMember({...editingMember, image: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setEditingMember(null)}>
                  Cancelar
                </Button>
                <Button onClick={() => handleEditMember(editingMember)} className="bg-blue-900 hover:bg-blue-800">
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
}

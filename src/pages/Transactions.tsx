
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Calendar, DollarSign, Plus, Edit3, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: number;
  title: string;
  client: string;
  sector: string;
  type: string;
  value: string;
  date: string;
  description: string;
  status: "Concluída" | "Em Andamento" | "Suspensa";
  highlights: string[];
}

const initialTransactions: Transaction[] = [
  {
    id: 1,
    title: "Aquisição Estratégica - TechCorp",
    client: "TechCorp Brasil",
    sector: "Tecnologia",
    type: "Aquisição",
    value: "R$ 450M",
    date: "2024-03",
    description: "Assessoria na aquisição de startup de IA para expansão do portfólio tecnológico da TechCorp.",
    status: "Concluída",
    highlights: ["Due diligence tecnológica", "Valuation de ativos intangíveis", "Estruturação de earnout"]
  },
  {
    id: 2,
    title: "Fusão Empresarial - IndústriaMax",
    client: "IndústriaMax SA",
    sector: "Industrial",
    type: "Fusão",
    value: "R$ 320M",
    date: "2024-01",
    description: "Fusão horizontal entre duas empresas líderes do setor industrial para criação de sinergias operacionais.",
    status: "Concluída",
    highlights: ["Análise de sinergias", "Reestruturação organizacional", "Aprovações regulatórias"]
  },
  {
    id: 3,
    title: "IPO Advisory - FinanceGroup",
    client: "FinanceGroup Ltd",
    sector: "Serviços Financeiros",
    type: "IPO",
    value: "R$ 180M",
    date: "2024-05",
    description: "Assessoria completa para abertura de capital na B3, incluindo roadshow e precificação.",
    status: "Em Andamento",
    highlights: ["Estruturação da oferta", "Roadshow internacional", "Book building"]
  }
];

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [filterSector, setFilterSector] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [newTransaction, setNewTransaction] = useState<Partial<Transaction>>({
    title: "",
    client: "",
    sector: "",
    type: "",
    value: "",
    date: "",
    description: "",
    status: "Em Andamento",
    highlights: []
  });

  const sectors = ["Tecnologia", "Industrial", "Serviços Financeiros", "Saúde", "Energia", "Varejo", "Educação"];
  const types = ["Aquisição", "Fusão", "IPO", "Spin-off", "Joint Venture", "Reestruturação"];

  const filteredTransactions = transactions.filter(transaction => {
    const sectorMatch = filterSector === "all" || transaction.sector === filterSector;
    const typeMatch = filterType === "all" || transaction.type === filterType;
    return sectorMatch && typeMatch;
  });

  const handleAddTransaction = () => {
    if (newTransaction.title && newTransaction.client) {
      const transaction: Transaction = {
        id: Date.now(),
        title: newTransaction.title || "",
        client: newTransaction.client || "",
        sector: newTransaction.sector || "",
        type: newTransaction.type || "",
        value: newTransaction.value || "",
        date: newTransaction.date || "",
        description: newTransaction.description || "",
        status: newTransaction.status as "Concluída" | "Em Andamento" | "Suspensa" || "Em Andamento",
        highlights: newTransaction.highlights || []
      };
      setTransactions([...transactions, transaction]);
      setNewTransaction({
        title: "",
        client: "",
        sector: "",
        type: "",
        value: "",
        date: "",
        description: "",
        status: "Em Andamento",
        highlights: []
      });
      setIsAddingTransaction(false);
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    const updatedTransactions = transactions.map(t => 
      t.id === transaction.id ? transaction : t
    );
    setTransactions(updatedTransactions);
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-green-100 text-green-800";
      case "Em Andamento": return "bg-blue-100 text-blue-800";
      case "Suspensa": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const totalValue = transactions
    .filter(t => t.status === "Concluída")
    .reduce((sum, t) => sum + parseFloat(t.value.replace(/[^\d,]/g, '').replace(',', '.')), 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Nossas Transações</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Track record comprovado em transações de sucesso que geraram 
              valor significativo para nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl font-bold mb-2">R$ {(totalValue/1000).toFixed(1)}B+</div>
              <div className="text-blue-200">Valor Total Transacionado</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl font-bold mb-2">{transactions.length}</div>
              <div className="text-blue-200">Transações Realizadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Histórico de Transações</h2>
              <p className="text-gray-600 mt-2">Explore nosso portfólio de transações por setor e tipo</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filterSector} onValueChange={setFilterSector}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os setores</SelectItem>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={() => setIsAddingTransaction(true)}
                className="bg-blue-900 hover:bg-blue-800"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nova Transação
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{transaction.title}</h3>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{transaction.description}</p>
                    </div>
                    
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingTransaction(transaction)}
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteTransaction(transaction.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Cliente</span>
                      <span className="text-sm font-medium text-gray-900">{transaction.client}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Setor</span>
                      <span className="text-sm font-medium text-gray-900">{transaction.sector}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Tipo</span>
                      <span className="text-sm font-medium text-gray-900">{transaction.type}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Valor</span>
                      <span className="text-sm font-bold text-blue-900">{transaction.value}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Data</span>
                      <span className="text-sm font-medium text-gray-900">{transaction.date}</span>
                    </div>
                  </div>
                  
                  {transaction.highlights.length > 0 && (
                    <div className="border-t border-gray-100 pt-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Destaques</span>
                      <div className="flex flex-wrap gap-2">
                        {transaction.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Transaction Dialog */}
      <Dialog open={isAddingTransaction} onOpenChange={setIsAddingTransaction}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Nova Transação</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Título</label>
                <Input
                  value={newTransaction.title}
                  onChange={(e) => setNewTransaction({...newTransaction, title: e.target.value})}
                  placeholder="Ex: Aquisição Estratégica - TechCorp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cliente</label>
                <Input
                  value={newTransaction.client}
                  onChange={(e) => setNewTransaction({...newTransaction, client: e.target.value})}
                  placeholder="Nome do cliente"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Setor</label>
                <Select 
                  value={newTransaction.sector} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, sector: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map(sector => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <Select 
                  value={newTransaction.type} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <Select 
                  value={newTransaction.status} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, status: value as any})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                    <SelectItem value="Concluída">Concluída</SelectItem>
                    <SelectItem value="Suspensa">Suspensa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Valor</label>
                <Input
                  value={newTransaction.value}
                  onChange={(e) => setNewTransaction({...newTransaction, value: e.target.value})}
                  placeholder="Ex: R$ 450M"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Data</label>
                <Input
                  value={newTransaction.date}
                  onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                  placeholder="Ex: 2024-03"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <Textarea
                value={newTransaction.description}
                onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                placeholder="Descrição detalhada da transação"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Destaques (separados por vírgula)</label>
              <Input
                value={newTransaction.highlights?.join(', ')}
                onChange={(e) => setNewTransaction({...newTransaction, highlights: e.target.value.split(', ').filter(h => h.trim())})}
                placeholder="Ex: Due diligence, Valuation, Estruturação"
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline" onClick={() => setIsAddingTransaction(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddTransaction} className="bg-blue-900 hover:bg-blue-800">
                Adicionar Transação
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Transaction Dialog */}
      {editingTransaction && (
        <Dialog open={!!editingTransaction} onOpenChange={() => setEditingTransaction(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Editar Transação</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Título</label>
                  <Input
                    value={editingTransaction.title}
                    onChange={(e) => setEditingTransaction({...editingTransaction, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cliente</label>
                  <Input
                    value={editingTransaction.client}
                    onChange={(e) => setEditingTransaction({...editingTransaction, client: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Setor</label>
                  <Select 
                    value={editingTransaction.sector} 
                    onValueChange={(value) => setEditingTransaction({...editingTransaction, sector: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map(sector => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo</label>
                  <Select 
                    value={editingTransaction.type} 
                    onValueChange={(value) => setEditingTransaction({...editingTransaction, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <Select 
                    value={editingTransaction.status} 
                    onValueChange={(value) => setEditingTransaction({...editingTransaction, status: value as any})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                      <SelectItem value="Concluída">Concluída</SelectItem>
                      <SelectItem value="Suspensa">Suspensa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Valor</label>
                  <Input
                    value={editingTransaction.value}
                    onChange={(e) => setEditingTransaction({...editingTransaction, value: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Data</label>
                  <Input
                    value={editingTransaction.date}
                    onChange={(e) => setEditingTransaction({...editingTransaction, date: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <Textarea
                  value={editingTransaction.description}
                  onChange={(e) => setEditingTransaction({...editingTransaction, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Destaques (separados por vírgula)</label>
                <Input
                  value={editingTransaction.highlights.join(', ')}
                  onChange={(e) => setEditingTransaction({...editingTransaction, highlights: e.target.value.split(', ').filter(h => h.trim())})}
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setEditingTransaction(null)}>
                  Cancelar
                </Button>
                <Button onClick={() => handleEditTransaction(editingTransaction)} className="bg-blue-900 hover:bg-blue-800">
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
